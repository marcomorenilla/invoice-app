/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.models;

import java.util.List;

/**
 *
 * @author marco
 */

public class Invoice {

    private String id;
    private String name;
    private String date;
    private String number;
    private Party vendor;
    private Party client;
    private List<Item> items;

    public Invoice() {

    }

    public Invoice(String id, String name, String date, String number, Party vendor, Party client, List<Item> items) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.number = number;
        this.vendor = vendor;
        this.client = client;
        this.items = items;
    }

    @Override
    public String toString() {
        return "Invoice{\n" + "id=" + id + 
                ",\n name=" + name + 
                ",\n date=" + date + 
                ",\n number=" + number + 
                ",\n vendor=" + vendor + 
                ",\n client=" + client + 
                ",\n items=" + items + "\n}";
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Party getVendor() {
        return vendor;
    }

    public void setVendor(Party vendor) {
        this.vendor = vendor;
    }

    public Party getClient() {
        return client;
    }

    public void setClient(Party client) {
        this.client = client;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

}
