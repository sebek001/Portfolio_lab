import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://tgqcdkhmcvbmjtkedngk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncWNka2htY3ZibWp0a2VkbmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2ODUwMDEsImV4cCI6MjAxNjI2MTAwMX0.jwE54fuNpau6oAQQUroSV8VqxNY_M2JqNuiGXSBd7lc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase