<?php
// database connection

/**
 * Get all items  
 * @return array of items 
 */
function getItems()
{
    global $db;

}

/**
 * Get a single item
 * @param integer $id : the item id
 
 * @return associative_array: the item related to given item id
 */
function getItemById($id)
{

}

/**
 * Remove item related to given item id
 * @param integer $id :  the id of the item to delete
 
 * @return boolean: true if deletion was successful, false otherwise
 */
function deleteItem($id)
{
    global $db;

}

/**
 * Update a Item given id and attibutes
 * @param integer $id :  		the id of the item to update
 * @param string  $item_name :  the item name
 * @param integer $price :  	the item price
 * 
 
 * @return boolean: true if deletion was successful, false otherwise
 */
function updateItem($id, $item_name, $price)
{

}

/**
 * Create a new item 
 * @param string  $item_name :  	the item name
 * @param integer $price :  		the price
 
 * @return boolean: true if create was successful, false otherwise
 */
function createItem($item_name, $price)
{
    global $db;
    
}
