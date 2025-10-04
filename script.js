 // Generar lluvia
        const rainContainer = document.querySelector('.rain');
        const numDrops = 120;

        for (let i = 0; i < numDrops; i++) {
            const drop = document.createElement('div');
            drop.classList.add('drop');
            drop.style.left = Math.random() * 100 + '%';
            drop.style.animationDelay = Math.random() * 2 + 's';
            drop.style.animationDuration = (Math.random() * 0.5 + 0.7) + 's';
            rainContainer.appendChild(drop);
        }

        // Relámpagos
        const lightning = document.querySelector('.lightning');
        
        function triggerLightning() {
            lightning.classList.add('active');
            setTimeout(() => lightning.classList.remove('active'), 400);
            setTimeout(triggerLightning, Math.random() * 10000 + 5000);
        }

        setTimeout(triggerLightning, 3000);

        // Efecto 3D en imágenes de galería
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            const img = item.querySelector('.gallery-image');
            
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 8;
                const rotateY = (centerX - x) / 8;
                
                img.style.transform = `scale(1.15) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            item.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1) rotateX(0) rotateY(0)';
            });
        });

        // Navegación con puntos
        const navDots = document.querySelectorAll('.nav-dot');
        const sections = document.querySelectorAll('section');
        
        navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const sectionIndex = parseInt(dot.getAttribute('data-section'));
                sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Actualizar navegación al hacer scroll
        window.addEventListener('scroll', () => {
            let current = 0;
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 300) {
                    current = index;
                }
            });
            
            navDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === current);
            });
        });