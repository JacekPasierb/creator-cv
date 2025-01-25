import html2pdf from "html2pdf.js";

const ExportToPDF = () => {
  const handleDownload = async () => {
    const exportButton = document.querySelector(".export-button");
      if (exportButton instanceof HTMLButtonElement) {
        exportButton.style.display = "none";
      }
    
    
    const element = document.querySelector(".portfolio-container");

    const options = {
      filename: "Pasierb-CV.pdf",
      html2canvas: {
        useCORS: true, // Używanie CORS, jeśli masz zewnętrzne obrazy
        scale: 3,
        letterRendering: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        font: "Roboto",
      },
      pagebreak: {
        mode: ["css", "legacy"], // Kluczowa opcja podziału stron
        avoid: "p, h1, h2, h3, h4, h5, h6", // Unikanie dzielenia nagłówków i paragrafów
      },
    };

    // Korzystamy z html2pdf do przetworzenia HTML na PDF
    const pdf = html2pdf().from(element).set(options).save();
    pdf.then(() => {
      if (exportButton instanceof HTMLButtonElement) {
        exportButton.style.display = "block"; // Przywrócenie widoczności przycisku
      }
    
    });
  };

  return (
    <button className="export-button" onClick={handleDownload}>
      Pobierz PDF
    </button>
  );
};

export default ExportToPDF;
