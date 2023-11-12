terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

provider "azurerm" {
  features {}
}

# import existing Resource group
resource "azurerm_resource_group" "kwj-rg" {
  name     = "kwilliamsjr-1"
  location = "Canada Central"
  tags = {

    environment = "Dev"
  }


}


resource "azurerm_resource_group" "kwc-rg" {
  name     = "kwcounter"
  location = "Canada East"
  tags = {

    environment = "Dev"
  }

}



resource "azurerm_resource_group" "kwjapi-rg" {
  name     = "kwilliamsjr-api"
  location = "Canada East"
  tags = {

    environment = "Dev"
  }


}

