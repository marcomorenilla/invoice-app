/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.service;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import static com.marco.invoice_backend.Util.PDFStyle.SECTION_BOLD_FONT;
import static com.marco.invoice_backend.Util.PDFStyle.SECTION_FONT;
import static com.marco.invoice_backend.Util.PDFStyle.SECTION_HEADER_FONT;
import static com.marco.invoice_backend.Util.PDFStyle.TITLE_FONT;
import com.marco.invoice_backend.models.Invoice;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.Instant;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
public class PDFGenerationService {

    public byte[] generatePDF(Invoice invoice) {

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        Document doc = new Document();
        
        try {
            PdfWriter.getInstance(doc, baos);
            doc.open();

            Instant hoy = Instant.now();

            Paragraph emptyLine = new Paragraph("");

            Paragraph title = new Paragraph(invoice.getName(), TITLE_FONT);
            title.setAlignment(Paragraph.ALIGN_CENTER);
            doc.add(title);
            Paragraph date = new Paragraph(hoy.toString(), SECTION_HEADER_FONT);
            doc.add(date);
            doc.add(emptyLine);
            Paragraph vendorName = new Paragraph(invoice.getVendor().getName(),SECTION_BOLD_FONT);
            doc.add(vendorName);
            Paragraph ending =  new Paragraph("Pues esto sería", SECTION_FONT);
            doc.add(ending);
          

        } catch (DocumentException ex) {
            ex.printStackTrace();
        }

        doc.close();

        return baos.toByteArray();
    }

    public void writePDF(byte[] pdfByte) {
        File f = new File("prueba.pdf");

        try {
            FileOutputStream fos = new FileOutputStream(f);
            fos.write(pdfByte);
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        }

    }
}
