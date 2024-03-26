// pages/api/items/[id]/name.js
import { supabase } from '../../../../db/supabaseClient'; // Assuming the supabase client is located in this path

export default async function handler(req, res) {
  const {
    query: { id },
    method,
    body: { name },
  } = req;

  switch (method) {
    case 'PUT':
      try {
        // Update the item name in Supabase
        const { data, error } = await supabase
          .from('items')
          .update({ name })
          .eq('id', id);
        
        if (error) {
          throw error;
        }

        res.status(200).json(data);
      } catch (error) {
        console.error('Error updating item name:', error.message);
        res.status(500).json({ error: 'Failed to update item name' });
      }
      break;
    default:
      res.setHeader('Allow', ['PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
