/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.Util;

import com.itextpdf.text.Font;


/**
 *
 * @author marco
 */
public class PDFStyle {
    
    private PDFStyle (){
        
    }
    
    public final static int SIZE_HIGH = 18;
    public final static int SIZE_MEDIUM = 14;
    public final static int SIZE_NORMAL = 12;
    public final static int SIZE_SMALL = 10;
    
    public final static Font TITLE_FONT =  new Font(Font.FontFamily.HELVETICA, SIZE_HIGH,Font.BOLD );
    public final static Font SECTION_HEADER_FONT =  new Font(Font.FontFamily.HELVETICA, SIZE_MEDIUM,Font.BOLD );
    public final static Font SECTION_BOLD_FONT =  new Font(Font.FontFamily.HELVETICA, SIZE_NORMAL,Font.BOLD );
    public final static Font SECTION_FONT =  new Font(Font.FontFamily.HELVETICA, SIZE_NORMAL,Font.NORMAL );
    
    
    
}
