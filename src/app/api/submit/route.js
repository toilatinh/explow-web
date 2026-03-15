export async function POST(req) {
    try {
      const { email, message } = await req.json();
  
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbx2MZ24bWa3aQtcvM_Q7nJ5E6RJyT4_oRfvlZLnfHRhvMSCy3sksJbBIkuGjm-NNyyW/exec?email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
      );
  
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }