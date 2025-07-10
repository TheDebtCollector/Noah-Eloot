// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kioflwebisyywfshibmy.supabase.co'; // 👈 Replace this
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpb2Zsd2ViaXN5eXdmc2hpYm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzM1OTMsImV4cCI6MjA2Nzc0OTU5M30.Dx4KArO5CmOeN-9qNKsDt7e5J_eItI0DMJzNQH42mgw'; // 👈 Replace this

export const supabase = createClient(supabaseUrl, supabaseAnonKey);