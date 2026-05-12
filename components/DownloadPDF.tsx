"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadResultaatPDF(code: string): Promise<void> {
  const element = document.getElementById("resultaat-pdf-inhoud");
  if (!element) {
    console.error("PDF-bron ontbreekt");
    return;
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  const totalPages = pdf.getNumberOfPages();
  const footerY = pageHeight - 8;
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    pdf.setFontSize(8);
    pdf.setTextColor(80, 80, 80);
    pdf.text(
      "Gebaseerd op het RIASEC-model van John Holland (1959) · Geen officieel psychologisch instrument",
      10,
      footerY
    );
    pdf.text(`Pagina ${i} / ${totalPages}`, pageWidth - 28, footerY);
  }

  const datum = new Date().toISOString().split("T")[0];
  pdf.save(`RIASEC-resultaat-${code}-${datum}.pdf`);
}
