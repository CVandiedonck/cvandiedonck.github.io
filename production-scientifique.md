---
layout: default
title: "Production SCientifique"
lang: fr                  
ref: scientific-output
---

<div class="coming-soon-container">
  <div class="coming-soon-content">
    <div class="coming-soon-icon">⏳</div>
    
    <h2>
      {% if page.lang == 'fr' %}
        Contenu en préparation
      {% else %}
        Content in preparation
      {% endif %}
    </h2>
    
    <p class="coming-soon-message">
      {% if page.lang == 'fr' %}
        Cette section est actuellement en cours de rédaction. Le contenu détaillé sera bientôt disponible.
      {% else %}
        This section is currently being written. Detailed content will be available soon.
      {% endif %}
    </p>
    
    <p class="coming-soon-submessage">
      {% if page.lang == 'fr' %}
        En attendant, n'hésitez pas à consulter les autres sections ou à me <a href="/contact">contacter</a> pour plus d'informations.
      {% else %}
        In the meantime, feel free to browse other sections or <a href="/en/contact">contact me</a> for more information.
      {% endif %}
    </p>
  </div>
</div>

<style>
.coming-soon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  text-align: center;
  padding: 2rem;
}

.coming-soon-content {
  max-width: 600px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.coming-soon-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.coming-soon-content h2 {
  color: #3498db;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.coming-soon-message {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.coming-soon-submessage {
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.5;
}

.coming-soon-submessage a {
  color: #3498db;
  text-decoration: none;
}

.coming-soon-submessage a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .coming-soon-content {
    padding: 2rem;
  }
  
  .coming-soon-icon {
    font-size: 3rem;
  }
  
  .coming-soon-content h2 {
    font-size: 1.5rem;
  }
}
</style>
