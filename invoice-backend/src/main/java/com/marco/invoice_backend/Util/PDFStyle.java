/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.Util;

import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.kernel.colors.Color;
import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.layout.Style;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import java.io.IOException;

/**
 *
 * @author marco
 */
public class PDFStyle {

    private PDFStyle() {

    }

    public final static float SIZE_BIG = 18;
    public final static float SIZE_MEDIUM = 14;
    public final static float SIZE_NORMAL = 12;
    public final static float SIZE_SMALL = 10;

    public final static Color BLUE = ColorConstants.BLUE;
    public final static Color WHITE = ColorConstants.WHITE;

    public final static Paragraph boldParagraph(String text, float size) throws IOException {

        Paragraph paragraph = new Paragraph(text);
        PdfFont font = PdfFontFactory.createFont(StandardFonts.HELVETICA_BOLD);

        Style styleTitle = new Style()
                .setFont(font)
                .setFontSize(size);

        paragraph.addStyle(styleTitle);

        return paragraph;
    }

    public final static Paragraph textParagraph(String text, float size) throws IOException {
        Paragraph paragraph = new Paragraph(text);
        PdfFont font = PdfFontFactory.createFont(StandardFonts.HELVETICA);

        Style styleTitle = new Style()
                .setFont(font)
                .setFontSize(size);

        paragraph.addStyle(styleTitle);

        return paragraph;

    }

    public final static Paragraph colorParagraph(String text, float size, Color color) throws IOException {
        Paragraph paragraph = new Paragraph(text);
        PdfFont font = PdfFontFactory.createFont(StandardFonts.HELVETICA);

        Style styleTitle = new Style()
                .setFont(font)
                .setFontSize(size)
                .setFontColor(color);

        paragraph.addStyle(styleTitle);

        return paragraph;

    }

    public final static Paragraph colorBackgroundParagraph(String text, float size, Color colorFont, Color colorBackground) throws IOException {
        Paragraph paragraph = new Paragraph(text);
        PdfFont font = PdfFontFactory.createFont(StandardFonts.HELVETICA_BOLD);

        Style styleTitle = new Style()
                .setFont(font)
                .setFontSize(size)
                .setFontColor(colorFont)
                .setBackgroundColor(colorBackground);

        paragraph.addStyle(styleTitle);

        return paragraph;

    }

    public final static void processCell(Table table, Paragraph paragraph, boolean isHeader) {

        if (isHeader) {
            table.addHeaderCell(
                    new Cell().add(
                            paragraph));
        } else {
            table.addCell(
                    new Cell().add(
                            paragraph));
        }
    }

}
