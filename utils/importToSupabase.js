const SupabaseJSClient = require("@supabase/supabase-js");
const CIQUAL = require("../src/assets/data/ciqual.json")

const environment = {
  production: false,
  supabaseUrl: 'https://ujawgtisquaadojjxrwb.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqYXdndGlzcXVhYWRvamp4cndiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTM3MTU4NCwiZXhwIjoxOTk2OTQ3NTg0fQ.bU3ukkjbEEtKwk0uTQKHMaWhjMvuG9X48jFDmCik8q4',
}
/**
 * Instantiation du client Supabase
 */
const supabase = SupabaseJSClient.createClient(environment.supabaseUrl, environment.supabaseKey);

/**
 * Mettre à jour la base de données ciqual
 */
const updateCiqual= () => {
  let counter = 0;
  CIQUAL.forEach(async (row) => {
    const { data, error } = await supabase.from("ciqual").insert(row);
    if (data) counter += 1;
    if (error) console.log(error);
  });
  console.log(`${counter} rows inserted`);
}


