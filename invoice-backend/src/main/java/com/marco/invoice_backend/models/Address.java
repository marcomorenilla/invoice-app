/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.marco.invoice_backend.models;

/**
 *
 * @author marco
 */
public class Address {
    
    private String country;
    private String city;
    private String street;
    private String number;
    private String cp;

    public Address(String country, String city, String street, String number, String cp) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.number = number;
        this.cp = cp;
    }

    public Address() {
    }

    @Override
    public String toString() {
        return "Address{\n" + 
                "\ncountry=" + country + 
                ",\n city=" + city + 
                ",\n street=" + street + 
                ",\n number=" + number + 
                ",\n cp=" + cp + "\n}";
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCp() {
        return cp;
    }

    public void setCp(String cp) {
        this.cp = cp;
    }
    
    
    
}
