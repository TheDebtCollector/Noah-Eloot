import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co'; // Replace with your Project URL
const supabaseAnonKey = 'YOUR_ANON_KEY'; // Replace with your anon public key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  const { data, error } = await supabase
    .from('jobs')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data from jobs table:', data);
  }
}

testConnection();