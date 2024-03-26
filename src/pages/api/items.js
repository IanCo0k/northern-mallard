// pages/api/items.js
import { supabase } from '../../db/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase.from('items').select('*');
      if (error) throw error;
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching items' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
