/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.controller;

import com.marco.invoice_backend.models.Invoice;
import com.marco.invoice_backend.service.PDFGenerationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marco
 */

@RestController
@RequestMapping("/api")
public class PDFController {
    
    @Autowired
    private PDFGenerationService pdfService;
    
    
    @GetMapping("/test")
    public String test(){
        return "Api funciona";
    }
    
    @CrossOrigin
    @PostMapping("/pdf")
    public String writePDF(@RequestBody Invoice invoice){
       byte[] pdf = pdfService.generatePDF(invoice);
       pdfService.writePDF(pdf);
       return"Pdf escrito";
    }
    
}
