/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.models;

/**
 *
 * @author marco
 */
public class Party {
    private String name;
    private String fiscalNumber;
    private Address address;

    public Party(String name, String fiscalNumber, Address address) {
        this.name = name;
        this.fiscalNumber = fiscalNumber;
        this.address = address;
    }

    public Party() {
    }

    @Override
    public String toString() {
        return "Party{" + 
                "\nname=" + name + 
                ",\n fiscalNumber=" + fiscalNumber + 
                ",\n address=" + address + "\n}";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFiscalNumber() {
        return fiscalNumber;
    }

    public void setFiscalNumber(String fiscalNumber) {
        this.fiscalNumber = fiscalNumber;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
    
    
    
}
