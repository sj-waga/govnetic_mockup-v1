// scripts.js
function switchMode(mode) {
    const content = document.getElementById('main-content');
    if (mode === 'public') {
        content.innerHTML = `
            <h2>Mode Publik</h2>
            <p>Menampilkan struktur regulasi secara publik.</p>
            <div class="regulation">
                <h3>Judul: Undang-Undang Nomor 1</h3>
                <h4>Bab I: Pendahuluan</h4>
                <p>Pasal 1: Definisi...</p>
            </div>
        `;
    } else if (mode === 'editor') {
        content.innerHTML = `
            <h2>Mode Editor</h2>
            <form>
                <label>Judul</label>
                <input type="text" placeholder="Masukkan judul regulasi" />
                <label>Bab</label>
                <input type="text" placeholder="Masukkan bab" />
                <label>Pasal</label>
                <input type="text" placeholder="Masukkan pasal" />
                <button type="submit">Tambah</button>
            </form>
        `;
    }
}
