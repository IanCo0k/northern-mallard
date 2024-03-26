// pages/api/items.js
import { supabase } from '../../db/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, description, image_key_1, image_key_2, image_key_3, startingBid, expirationDate } = req.body;

      // Insert the new item into the 'items' table in Supabase
      const { data, error } = await supabase.from('items').insert([
        {
          name,
          description,
          image_key_1,
          image_key_2,
          image_key_3,
          starting_bid: startingBid,
          expiration_date: expirationDate,
        },
      ]);

      if (error) {
        throw error;
      }

      res.status(201).json(data);
    } catch (error) {
      console.error('Error adding new item:', error.message);
      res.status(500).json({ error: 'Failed to add new item' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
