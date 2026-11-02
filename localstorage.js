document.addEventListener("DOMContentLoaded", () => {
    const authSection = document.getElementById("authSection");
    const appSection = document.getElementById("appSection");
    const loginBox = document.getElementById("loginBox");
    const registerBox = document.getElementById("registerBox");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const linkToRegister = document.getElementById("linkToRegister");
    const linkToLogin = document.getElementById("linkToLogin");
    const btnLogout = document.getElementById("btnLogout");
    const userGreeting = document.getElementById("userGreeting");
    
    const movieGrid = document.getElementById("movieGrid");
    const movieForm = document.getElementById("movieForm");
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");
    const btnOpenCreate = document.getElementById("btnOpenCreate");
    const modalTitle = document.getElementById("modalTitle");
    
    const movieModal = new bootstrap.Modal(document.getElementById("movieModal"));
    const detailModal = new bootstrap.Modal(document.getElementById("detailModal"));

    const defaultMovies = [
        {
            id: "1",
            title: "¿Qué pasó ayer? (The Hangover)",
            director: "Todd Phillips",
            genre: "Comedia",
            year: "2009",
            rating: "7.7",
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
            description: "Tres amigos se despiertan en una suite de hotel en Las Vegas tras una salvaje despedida de soltero, sufriendo una amnesia total y descubriendo que el novio ha desaparecido. Utilizando las pocas pistas a su alrededor, deben reconstruir las caóticas horas previas a través de la ciudad para encontrarlo a tiempo para la boda."
        },
        {
            id: "2",
            title: "Barbie",
            director: "Greta Gerwig",
            genre: "Comedia",
            year: "2023",
            rating: "6.9",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
            description: "En el utópico e impecable mundo de Barbieland, una de las muñecas empieza a experimentar imperfecciones físicas y pensamientos existenciales sobre la mortalidad. Al viajar al Mundo Real junto a Ken para hallar respuestas, se enfrenta a las complejas dinámicas de género de la sociedad humana moderna, desatando una revolución cultural a su regreso."
        },
        {
            id: "3",
            title: "Gladiador (Gladiator)",
            director: "Ridley Scott",
            genre: "Acción",
            year: "2000",
            rating: "8.5",
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=500&q=80",
            description: "Traicionado por Cómodo, el ambicioso heredero al trono imperial de Roma, el leal general Máximo Décimo Meridio es capturado, esclavizado y forzado a convertirse en gladiador tras el asesinato de su familia. Su destreza en la arena del Coliseo lo convierte en el campeón del pueblo, usando su enorme fama como el arma definitiva para ejecutar su venganza contra el emperador."
        },
        {
            id: "4",
            title: "Mad Max: Furia en el camino (Mad Max: Fury Road)",
            director: "George Miller",
            genre: "Acción",
            year: "2015",
            rating: "8.1",
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
            description: "En un vasto y despiadado páramo postapocalíptico donde el agua y la gasolina son los recursos más valiosos, una mujer rebelde llamada Imperator Furiosa lidera una fuga masiva a bordo de un camión cisterna blindado para rescatar a las esposas de un tirano. En su huida a través del desierto se alía con Max Rockatansky, desencadenando una persecución automovilística de alta velocidad y pura supervivencia."
        },
        {
            id: "5",
            title: "El conjuro (The Conjuring)",
            director: "James Wan",
            genre: "Terror",
            year: "2013",
            rating: "7.5",
            image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=500&q=80",
            description: "Basada en los archivos reales de los investigadores paranormales Ed y Lorraine Warren, la historia sigue a una numerosa familia que se muda a una antigua casa de campo en Rhode Island. Al poco tiempo de instalarse, empiezan a sufrir perturbaciones violentas e inexplicables por parte de una entidad demoníaca hostil, obligándolos a solicitar un exorcismo de emergencia."
        },
        {
            id: "6",
            title: "¡Huye! (Get Out)",
            director: "Jordan Peele",
            genre: "Terror",
            year: "2017",
            rating: "7.8",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",
            description: "Chris, un joven fotógrafo afroamericano, viaja junto a su novia blanca a una recóndita finca en el campo para conocer a sus adinerados suegros durante el fin de semana. Aunque la hospitalidad inicial de la familia parece excesiva y un tanto incómoda, una serie de perturbadores descubrimientos sobre el comportamiento de los lugareños lo lleva a destapar una red criminal de pesadilla soterrada bajo el racismo moderno."
        },
        {
            id: "7",
            title: "El origen (Inception)",
            director: "Christopher Nolan",
            genre: "Ciencia Ficción",
            year: "2010",
            rating: "8.8",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80",
            description: "Dom Cobb es un prófugo experto en el arte del espionaje corporativo mediante la 'extracción', una técnica ilegal que consiste en infiltrarse en el subconsciente de las personas a través de los sueños para robar sus secretos comerciales. Para limpiar su historial penal y regresar con sus hijos, acepta la misión inversa: realizar una 'incepción', que implica implantar una idea original en la mente de un poderoso heredero mientras duerme."
        },
        {
            id: "8",
            title: "Avatar",
            director: "James Cameron",
            genre: "Ciencia Ficción",
            year: "2009",
            rating: "7.9",
            image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
            description: "En el año 2154, un exmarine parapléjico es enviado a Pandora, una exuberante luna alienígena habitada por los Na'vi, con el fin de operar un cuerpo biológico artificial a control remoto para infiltrarse en la población nativa. Su misión original es facilitar la extracción minera de un valioso mineral terrestre, pero sus convicciones cambian drásticamente al enamorarse de una nativa y asimilar la profunda conexión espiritual que su cultura tiene con la naturaleza."
        },
        {
            id: "9",
            title: "Shrek 2",
            director: "Andrew Adamson, Kelly Asbury, Conrad Vernon",
            genre: "Animación",
            year: "2004",
            rating: "7.4",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80",
            description: "Tras regresar de su luna de miel, el ogro Shrek y la princesa Fiona reciben una invitación formal de los reyes para viajar al Reino de Muy Muy Lejano y celebrar su matrimonio. Sin embargo, la apariencia de Shrek desata el total rechazo del rey, quien conspira en secreto junto al Hada Madrina y al Gato con Botas para separar a la pareja y restaurar el orden de los cuentos de hadas tradicionales."
        },
        {
            id: "10",
            title: "Spider-Man: A través del Spider-Verso",
            director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
            genre: "Animación",
            year: "2023",
            rating: "8.6",
            image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=500&q=80",
            description: "El adolescente de Brooklyn Miles Morales se reencuentra con Gwen Stacy y es transportado a través del multiverso hacia la base de la Sociedad Araña, un equipo élite de héroes arácnidos encargados de proteger la estabilidad del espacio-tiempo. Cuando surge una nueva amenaza y Miles choca ideológicamente con el líder del grupo sobre cómo manejar los inevitables eventos trágicos de su destino, se desata una persecución interdimensional."
        },
        {
            id: "11",
            title: "El lobo de Wall Street (The Wolf of Wall Street)",
            director: "Martin Scorsese",
            genre: "Drama",
            year: "2013",
            rating: "8.2",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
            description: "Basada en las memorias de Jordan Belfort, narra el vertiginoso ascenso a la riqueza y el posterior colapso de un corredor de bolsa de Nueva York a finales de los años ochenta. Fundando su propia firma de corretaje, Belfort amasa una inmensa fortuna mediante fraudes financieros masivos en la bolsa, sumergiéndose a la par en un estilo de vida descontrolado lleno de excesos, drogas y corrupción que llama la atención del FBI."
        },
        {
            id: "12",
            title: "Parásitos (Parasite)",
            director: "Bong Joon-ho",
            genre: "Drama",
            year: "2019",
            rating: "8.5",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80",
            description: "Los Ki-taek son una familia humilde e ingeniosa que vive en un precario semisótano en Seúl, sobreviviendo con trabajos temporales mal pagados. Su suerte cambia drásticamente cuando el hijo mayor consigue empleo como tutor privado de la hija de la acaudalada familia Park, ideando un elaborado plan de manipulación para infiltrar gradualmente al resto de sus parientes en el personal doméstico de la lujosa mansión."
        }
    ];

    linkToRegister.addEventListener("click", (e) => {
        e.preventDefault();
        loginBox.classList.add("d-none");
        registerBox.classList.remove("d-none");
    });

    linkToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        registerBox.classList.add("d-none");
        loginBox.classList.remove("d-none");
    });

    function getUsers() {
        const users = localStorage.getItem("registeredUsers");
        return users ? JSON.parse(users) : [];
    }

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("regName").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;

        if (!name || !email || !password) {
            alert("Por favor complete todos los campos obligatorios.");
            return;
        }

        let users = getUsers();
        const userExists = users.some(u => u.email === email);

        if (userExists) {
            alert("El correo electrónico ya se encuentra registrado.");
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("registeredUsers", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));

        registerForm.reset();
        alert("¡Registro exitoso! Iniciando sesión...");
        checkAuth();
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        let users = getUsers();
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (foundUser) {
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            checkAuth();
        } else if (email === "admin@rentflix.com" && password === "123456") {
            const adminUser = { name: "Administrador", email: email };
            localStorage.setItem("currentUser", JSON.stringify(adminUser));
            checkAuth();
        } else {
            alert("Credenciales incorrectas o usuario no registrado.");
        }
    });

    function checkAuth() {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            authSection.classList.add("d-none");
            appSection.classList.remove("d-none");
            userGreeting.textContent = `Hola, ${user.name || user.email}`;
            loadMovies();
        } else {
            authSection.classList.remove("d-none");
            appSection.classList.add("d-none");
        }
    }

    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        checkAuth();
    });

    function getMovies() {
        const stored = localStorage.getItem("movies");
        // Si no hay películas o si el arreglo almacenado tiene menos de 12 películas (para asegurar que se carguen las nuevas), forzamos la carga por defecto
        if (!stored) {
            localStorage.setItem("movies", JSON.stringify(defaultMovies));
            return defaultMovies;
        }
        try {
            const parsed = JSON.parse(stored);
            if (!Array.isArray(parsed) || parsed.length < 12) {
                localStorage.setItem("movies", JSON.stringify(defaultMovies));
                return defaultMovies;
            }
            return parsed;
        } catch (e) {
            localStorage.setItem("movies", JSON.stringify(defaultMovies));
            return defaultMovies;
        }
    }

    function saveMovies(movies) {
        localStorage.setItem("movies", JSON.stringify(movies));
    }

    window.loadMovies = function() {
        const movies = getMovies();
        renderMovies(movies);
    }

    function renderMovies(moviesToRender) {
        movieGrid.innerHTML = "";
        if (moviesToRender.length === 0) {
            movieGrid.innerHTML = '<div class="col-12 text-center text-muted py-5"><h5>No se encontraron películas</h5></div>';
            return;
        }

        moviesToRender.forEach(movie => {
            const col = document.createElement("div");
            col.className = "col";
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${movie.image || 'https://via.placeholder.com/300x450?text=Sin+Imagen'}" class="card-img-top" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=Sin+Imagen'">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-white fw-bold mb-1">${movie.title}</h5>
                        <p class="card-text text-muted small mb-1"><i class="bi bi-person-fill"></i> ${movie.director || 'N/A'}</p>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge bg-danger">${movie.genre}</span>
                            <span class="small text-light">${movie.year}</span>
                            <span class="badge bg-warning text-dark"><i class="bi bi-star-fill me-1"></i>${movie.rating || 'N/A'}</span>
                        </div>
                        <div class="mt-auto d-flex gap-2 pt-2">
                            <button class="btn btn-outline-light btn-sm flex-grow-1" onclick="viewDetails('${movie.id}')">Detalles</button>
                            <button class="btn btn-outline-warning btn-sm" onclick="editMovie('${movie.id}')"><i class="bi bi-pencil"></i></button>
                            <button class="btn btn-outline-danger btn-sm" onclick="deleteMovie('${movie.id}')"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            `;
            movieGrid.appendChild(col);
        });
    }

    movieForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("movieId").value;
        const title = document.getElementById("movieTitle").value.trim();
        const director = document.getElementById("movieDirector").value.trim();
        const genre = document.getElementById("movieGenre").value;
        const year = document.getElementById("movieYear").value;
        const rating = document.getElementById("movieRating").value;
        const image = document.getElementById("movieImage").value.trim();
        const description = document.getElementById("movieDescription").value.trim();

        if (!title || !director || !genre || !year || !rating || !description) {
            alert("Por favor complete todos los campos obligatorios.");
            return;
        }

        let movies = getMovies();

        if (id) {
            movies = movies.map(m => m.id === id ? { id, title, director, genre, year, rating, image, description } : m);
        } else {
            const newMovie = {
                id: Date.now().toString(),
                title,
                director,
                genre,
                year,
                rating,
                image,
                description
            };
            movies.push(newMovie);
        }

        saveMovies(movies);
        movieForm.reset();
        document.getElementById("movieId").value = "";
        movieModal.hide();
        filterAndSearch();
    });

    window.editMovie = function(id) {
        const movies = getMovies();
        const movie = movies.find(m => m.id === id);
        if (!movie) return;

        document.getElementById("movieId").value = movie.id;
        document.getElementById("movieTitle").value = movie.title;
        document.getElementById("movieDirector").value = movie.director || "";
        document.getElementById("movieGenre").value = movie.genre;
        document.getElementById("movieYear").value = movie.year;
        document.getElementById("movieRating").value = movie.rating || "";
        document.getElementById("movieImage").value = movie.image || "";
        document.getElementById("movieDescription").value = movie.description;

        modalTitle.textContent = "Editar Película";
        movieModal.show();
    }

    window.deleteMovie = function(id) {
        if (confirm("¿Estás seguro de que deseas eliminar esta película?")) {
            let movies = getMovies();
            movies = movies.filter(m => m.id !== id);
            saveMovies(movies);
            filterAndSearch();
        }
    }

    window.viewDetails = function(id) {
        const movies = getMovies();
        const movie = movies.find(m => m.id === id);
        if (!movie) return;

        document.getElementById("detailMovieTitle").textContent = movie.title;
        document.getElementById("detailMovieDirector").textContent = movie.director || "N/A";
        document.getElementById("detailMovieGenre").textContent = movie.genre;
        document.getElementById("detailMovieYear").textContent = movie.year;
        document.getElementById("detailMovieRating").textContent = movie.rating || "N/A";
        document.getElementById("detailMovieDesc").textContent = movie.description;
        document.getElementById("detailImage").src = movie.image || 'https://via.placeholder.com/300x450?text=Sin+Imagen';

        detailModal.show();
    }

    btnOpenCreate.addEventListener("click", () => {
        movieForm.reset();
        document.getElementById("movieId").value = "";
        modalTitle.textContent = "Nueva Película";
    });

    function filterAndSearch() {
        const movies = getMovies();
        const query = searchInput.value.toLowerCase();
        const genre = genreFilter.value;

        const filtered = movies.filter(movie => {
            const matchesTitle = movie.title.toLowerCase().includes(query) || (movie.director && movie.director.toLowerCase().includes(query));
            const matchesGenre = genre === "" || movie.genre === genre;
            return matchesTitle && matchesGenre;
        });

        renderMovies(filtered);
    }

    searchInput.addEventListener("input", filterAndSearch);
    genreFilter.addEventListener("change", filterAndSearch);

    checkAuth();
});
