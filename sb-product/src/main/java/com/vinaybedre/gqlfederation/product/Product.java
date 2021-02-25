package com.vinaybedre.gqlfederation.product;

public class Product {
	private final String upc;
	private final String name;

	public Product(String upc, String name) {
		this.upc = upc;
		this.name = name;
	}

	public String getUpc() {
		return upc;
	}

	public String getName() {
		return name;
	}

}
