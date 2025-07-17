/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.models;

/**
 *
 * @author marco
 */
public class Item {
    private String id;
    private String product;
    private double price;
    private double quantity;
    private int iva;

    public Item(String id, String product, double price, double quantity, int iva) {
        this.id = id;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.iva = iva;
    }

    public Item() {
    }

    @Override
    public String toString() {
        return "Item{\n" + 
                "id=" + id + 
                ",\n product=" + product + 
                ",\n price=" + price + 
                ",\n quantity=" + quantity + 
                ",\n iva=" + iva + "\n}";
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public int getIva() {
        return iva;
    }

    public void setIva(int iva) {
        this.iva = iva;
    }
    
    
    
    
}
