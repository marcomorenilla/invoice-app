/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.service;

import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.UnitValue;
import com.marco.invoice_backend.Util.PDFStyle;
import static com.marco.invoice_backend.Util.PDFStyle.BLUE;
import static com.marco.invoice_backend.Util.PDFStyle.SIZE_BIG;
import static com.marco.invoice_backend.Util.PDFStyle.SIZE_MEDIUM;
import static com.marco.invoice_backend.Util.PDFStyle.SIZE_SMALL;
import static com.marco.invoice_backend.Util.PDFStyle.WHITE;
import com.marco.invoice_backend.models.Invoice;
import com.marco.invoice_backend.models.Item;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
public class PDFGenerationService {

    public byte[] generatePDF(Invoice invoice) {

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdf = new PdfDocument(writer);
        Document doc = new Document(pdf, PageSize.A4);

        
        Instant invDate = invoice.getDate();
        LocalDateTime ldt = LocalDateTime.ofInstant(invDate, ZoneId.systemDefault());
        DateTimeFormatter formatter =  DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String dateFormatted = formatter.format(ldt);
        
        List<Item> items = invoice.getItems();
        
        try{
            
             doc.add(PDFStyle.boldParagraph(invoice.getName(), SIZE_BIG));
             doc.add(PDFStyle.boldParagraph(dateFormatted, SIZE_MEDIUM));
             doc.add(PDFStyle.boldParagraph(invoice.getVendor().getName(), SIZE_MEDIUM));
             doc.add(PDFStyle.textParagraph("Pues acabando", SIZE_SMALL));
             doc.add(PDFStyle.colorBackgroundParagraph(" ", SIZE_BIG, WHITE, BLUE));
             
             Table table = new Table(new float[]{1,1,1,1,1});
             table.setWidth(UnitValue.createPercentValue(100));
             
             PDFStyle.processCell(table, PDFStyle.boldParagraph("Producto", SIZE_SMALL), true);
             PDFStyle.processCell(table, PDFStyle.boldParagraph("Precio", SIZE_SMALL), true);
             PDFStyle.processCell(table, PDFStyle.boldParagraph("Cantidad", SIZE_SMALL), true);
             PDFStyle.processCell(table, PDFStyle.boldParagraph("IVA", SIZE_SMALL), true);
             PDFStyle.processCell(table, PDFStyle.boldParagraph("Total", SIZE_SMALL), true);
             
             
             for (Item item: items){
                 PDFStyle.processCell(table, PDFStyle.textParagraph(item.getProduct(), SIZE_SMALL), false);
                 PDFStyle.processCell(table, PDFStyle.textParagraph(String.valueOf(item.getPrice()+" €"), SIZE_SMALL), false);
                 PDFStyle.processCell(table, PDFStyle.textParagraph(String.valueOf(item.getQuantity()), SIZE_SMALL), false);
                 PDFStyle.processCell(table, PDFStyle.textParagraph(String.valueOf(item.getIva() + " %"), SIZE_SMALL), false);
                 PDFStyle.processCell(table, PDFStyle.textParagraph(String.valueOf(item.getPrice() * item.getQuantity())+" €", SIZE_SMALL), false);
             }
             
             doc.add(table);
             
             doc.close();
             
        }catch(IOException ex){
            ex.printStackTrace();
        }
       
        

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
