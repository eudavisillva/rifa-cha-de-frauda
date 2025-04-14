// script.js
const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_KEY = "CHAVE-ANON-PUBLIC";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const telefone = "99981543912";
const grid = document.getElementById("grid");

async function fetchNumeros() {
  const { data, error } = await supabase.from('rifa').select('*');
  if (error) return alert("Erro ao carregar números");

  for (let i = 1; i <= 200; i++) {
    const ocupado = data.find(n => n.numero === i);
    const btn = document.createElement("button");
    btn.className = "rifa-num bg-white text-black rounded shadow";
    btn.textContent = i.toString().padStart(3, '0');

    if (ocupado) {
      btn.classList.add("ocupado");
      btn.innerHTML = "X";
    } else {
      btn.onclick = async () => {
        const { error: insertError } = await supabase.from('rifa').insert([{ numero: i }]);
        if (insertError) return alert("Erro ao reservar número");

        window.open(`https://wa.me/55${telefone}?text=Olá, acabei de reservar o número ${i.toString().padStart(3, '0')} da rifa!`, '_blank');
        location.reload();
      };
    }

    grid.appendChild(btn);
  }
}

fetchNumeros();
