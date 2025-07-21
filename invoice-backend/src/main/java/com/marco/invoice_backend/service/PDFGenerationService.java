/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.service;

import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;
import com.marco.invoice_backend.models.Invoice;
import com.marco.invoice_backend.models.Item;
import com.marco.invoice_backend.models.Party;
import static com.marco.invoice_backend.util.PDFStyle.SIZE_BIG;
import static com.marco.invoice_backend.util.PDFStyle.SIZE_MEDIUM;
import com.marco.invoice_backend.util.PDFUtil;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
public class PDFGenerationService {

    @Value("${file.name}")
    private String fileName;
    
    @Value("${file.path}")
    private String filePath;

    public byte[] generatePDF(Invoice invoice) {

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdf = new PdfDocument(writer);
        Document doc = new Document(pdf, PageSize.A4);

        String invDate = invoice.getDate();
        /*
        LocalDateTime ldt = LocalDateTime.ofInstant(invDate, ZoneId.systemDefault());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
       
        //String dateFormatted = formatter.format(ldt);
        
         */
        Party vendor = invoice.getVendor();
        Party client = invoice.getClient();
        List<Item> items = invoice.getItems();

        try {

            doc.add(PDFUtil.boldParagraph(invoice.getName(), SIZE_BIG).setTextAlignment(TextAlignment.CENTER));
            doc.add(PDFUtil.boldParagraph("Fecha: ", SIZE_BIG).setTextAlignment(TextAlignment.RIGHT));
            doc.add(PDFUtil.textParagraph(invDate, SIZE_MEDIUM).setTextAlignment(TextAlignment.RIGHT));
            doc.add(PDFUtil.boldParagraph("Número de factura: ", SIZE_BIG).setTextAlignment(TextAlignment.RIGHT));
            doc.add(PDFUtil.textParagraph(invoice.getNumber(), SIZE_MEDIUM).setTextAlignment(TextAlignment.RIGHT));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));

            Table tableParty = new Table(new float[]{1, 1});
            tableParty.setWidth(UnitValue.createPercentValue(100));

            PDFUtil.processCellNoBorder(tableParty, PDFUtil.boldParagraph(vendor.getName(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.boldParagraph(client.getName(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.textParagraph(vendor.getFiscalNumber(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.textParagraph(client.getFiscalNumber(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.textParagraph(vendor.getAddress().getCountry() + ", " + vendor.getAddress().getCity(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.textParagraph(client.getAddress().getCountry() + ", " + client.getAddress().getCity(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.textParagraph(vendor.getAddress().getStreet() + ", " + vendor.getAddress().getNumber(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.textParagraph(client.getAddress().getStreet() + ", " + client.getAddress().getNumber(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.textParagraph(vendor.getAddress().getCp(), SIZE_MEDIUM), false);
            PDFUtil.processCellNoBorder(tableParty, PDFUtil.textParagraph(client.getAddress().getCp(), SIZE_MEDIUM), false);

            doc.add(tableParty);
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));

            doc.add(PDFUtil.boldParagraph("Artículos:", SIZE_BIG).setTextAlignment(TextAlignment.CENTER));
            doc.add(new Paragraph(" "));
            doc.add(new Paragraph(" "));

            Table tableProducts = new Table(new float[]{1, 1, 1, 1, 1});
            tableProducts.setWidth(UnitValue.createPercentValue(100))
                    .setTextAlignment(TextAlignment.CENTER);

            PDFUtil.processCell(tableProducts, PDFUtil.boldParagraph("Producto", SIZE_MEDIUM), true);
            PDFUtil.processCell(tableProducts, PDFUtil.boldParagraph("Precio", SIZE_MEDIUM), true);
            PDFUtil.processCell(tableProducts, PDFUtil.boldParagraph("Cantidad", SIZE_MEDIUM), true);
            PDFUtil.processCell(tableProducts, PDFUtil.boldParagraph("IVA", SIZE_MEDIUM), true);
            PDFUtil.processCell(tableProducts, PDFUtil.boldParagraph("Total", SIZE_MEDIUM), true);

            for (Item item : items) {
                PDFUtil.processCell(tableProducts, PDFUtil.textParagraph(item.getProduct(), SIZE_MEDIUM), false);
                PDFUtil.processCell(tableProducts, PDFUtil.textParagraph(String.valueOf(item.getPrice() + " €"), SIZE_MEDIUM), false);
                PDFUtil.processCell(tableProducts, PDFUtil.textParagraph(String.valueOf(item.getQuantity()), SIZE_MEDIUM), false);
                PDFUtil.processCell(tableProducts, PDFUtil.textParagraph(String.valueOf(item.getIva() + " %"), SIZE_MEDIUM), false);
                PDFUtil.processCell(tableProducts, PDFUtil.textParagraph(String.valueOf(item.getPrice() * item.getQuantity()) + " €", SIZE_MEDIUM), false);
            }

            doc.add(tableProducts);

            doc.close();

        } catch (IOException ex) {
            ex.printStackTrace();
        }

        return baos.toByteArray();
    }

    public void writePDF(byte[] pdfByte) {

        File f = new File(filePath + fileName);
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
