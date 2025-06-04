---
layout: default
title: "Accueil"
lang: fr
ref: home
description: "Claire Vandiedonck, Maître de Conférences en Biostatistiques à l'Université Paris Cité, spécialisée en génétique et génomique des maladies autoimmunes et du diabète de type 1."
---
<div class="construction-banner">
  <div class="construction-content">
    <span class="construction-icon">🚧</span>
    <div class="construction-text">
      <strong>{% if page.lang == 'fr' %}Site en construction{% else %}Website under construction{% endif %}</strong>
      <p>{% if page.lang == 'fr' %}Ce site est actuellement en cours de développement. Toutes les sections ne sont pas encore disponibles.{% else %}This website is currently under development. Not all sections are available yet.{% endif %}</p>
    </div>
    <span class="construction-icon">🚧</span>
  </div>
</div>

<section class="section">
  <h2>{% if page.lang == 'fr' %}Bienvenue{% else %}Welcome{% endif %}</h2>
  
  {% if page.lang == 'fr' %}
  <p>Je suis Maître de Conférences (Hors Classe) en Biostatistiques à l'UFR de Médecine de l'<a href="https://u-paris.fr/">Université Paris Cité</a> et membre de l'équipe <a href="https://www.immediab.com/" target="_blank">IMMEDIAB</a> à l'Institut Necker Enfants Malades <a href="https://www.institut-necker-enfants-malades.fr/">(INEM)</a>. Mes recherches portent sur la génétique et génomique des maladies autoimmunes et inflammatoires, en particulier le diabète de type 1.</p>
  
  <p>Après un doctorat à l'Université Paris Descartes sur la génétique de la myasthénie autoimmune, j'ai effectué un postdoctorat de 5 ans au <a href="https://www.chg.ox.ac.uk/">Wellcome Trust Centre for Human Genetics</a> à d'Oxford , où mes travaux ont abouti à la première carte de transcription du Complexe Majeur d'Histocompatibilité humain.</p>

  <p>Depuis 2011, j'adopte des approches de génétique multifactorielle, génétique intégrative et multi-omiques pour identifier les variants génétiques et biomarqueurs associés à la prédisposition au diabète et aux risques de complications chroniques. Je suis également très impliquée dans l'innovation pédagogique avec le développement de la plateforme [PLASMA](https://plasmabio.org/) pour l'enseignement de l'analyse de données massives.</p>
  {% else %}
  <p>I am an Associate Professor (Hors Classe) in Biostatistics at the Faculty of Medicine, <a href="https://u-paris.fr/">Université Paris Cité</a> and member of the <a href="https://www.immediab.com/" target="_blank">IMMEDIAB</a> team at Institut Necker Enfants Malades <a href="https://www.institut-necker-enfants-malades.fr/">(INEM)</a>. My research focuses on the genetics and genomics of autoimmune and inflammatory diseases, particularly type 1 diabetes.</p>
  
  <p>After a PhD at Université Paris Descartes on the genetics of autoimmune myasthenia gravis, I completed a 5-year postdoc at the <a href="https://www.chg.ox.ac.uk/">Wellcome Trust Centre for Human Genetics</a> in Oxford, where my work resulted in the first transcription map of the human Major Histocompatibility Complex.</p>

  <p>Since 2011, I use multifactorial genetics, integrative genetics, and multi-omics approaches to identify genetic variants and biomarkers associated with diabetes predisposition and chronic complication risks. I am also deeply involved in pedagogical innovation with the development of the <a href="https://plasmabio.org/">PLASMA</a> platform for teaching massive data analysis.</p>
  {% endif %}

  <div class="timeline">
    <div class="timeline-header">
      <h3>{% if page.lang == 'fr' %}🎯 Mon Parcours{% else %}🎯 My Journey{% endif %}</h3>
    </div>
    
    <div class="timeline-container">
      <div class="timeline-line"></div>
      
      <div class="timeline-milestone">
        <div class="timeline-icon phd">🎓</div>
        <div class="timeline-content">
          <div class="timeline-year">2004</div>
          <div class="timeline-title">{% if page.lang == 'fr' %}Doctorat{% else %}PhD{% endif %}</div>
          <div class="timeline-location">Paris Descartes</div>
          <div class="timeline-achievement">{% if page.lang == 'fr' %}Génétique myasthénie{% else %}Myasthenia genetics{% endif %}</div>
        </div>
      </div>

      <div class="timeline-milestone">
        <div class="timeline-icon postdoc">🔬</div>
        <div class="timeline-content">
          <div class="timeline-year">2005-2009</div>
          <div class="timeline-title">Postdoc Oxford</div>
          <div class="timeline-location">Wellcome Trust</div>
          <div class="timeline-achievement">{% if page.lang == 'fr' %}Carte CMH humain{% else %}Human MHC map{% endif %}</div>
        </div>
      </div>

      <div class="timeline-milestone">
        <div class="timeline-icon mcf">👩‍🏫</div>
        <div class="timeline-content">
          <div class="timeline-year">2011</div>
          <div class="timeline-title">{% if page.lang == 'fr' %}Maître de Conf.{% else %}Assoc. Professor{% endif %}</div>
          <div class="timeline-location">Paris Diderot</div>
          <div class="timeline-achievement">{% if page.lang == 'fr' %}Diabète type 1{% else %}Type 1 diabetes{% endif %}</div>
        </div>
      </div>

      <div class="timeline-milestone">
        <div class="timeline-icon team">🧬</div>
        <div class="timeline-content">
          <div class="timeline-year">2019</div>
          <div class="timeline-title">IMMEDIAB</div>
          <div class="timeline-location">INEM</div>
          <div class="timeline-achievement">Multi-omiques</div>
        </div>
      </div>

      <div class="timeline-milestone">
        <div class="timeline-icon hdr">🏆</div>
        <div class="timeline-content">
          <div class="timeline-year">2024-25</div>
          <div class="timeline-title">HDR + ANR</div>
          <div class="timeline-location">Paris Cité</div>
          <div class="timeline-achievement">{% if page.lang == 'fr' %}GLYRISK 800k€{% else %}GLYRISK €800k{% endif %}</div>
        </div>
      </div>
    </div>

    <div class="timeline-stats">
      <div class="timeline-stat">
        <span class="timeline-stat-number">20+</span>
        <span class="timeline-stat-label">{% if page.lang == 'fr' %}Années expérience{% else %}Years experience{% endif %}</span>
      </div>
      <div class="timeline-stat">
        <span class="timeline-stat-number">29</span>
        <span class="timeline-stat-label">Publications</span>
      </div>
      <div class="timeline-stat">
        <span class="timeline-stat-number">2900+</span>
        <span class="timeline-stat-label">Citations</span>
      </div>
      <div class="timeline-stat">
        <span class="timeline-stat-number">{% if page.lang == 'fr' %}€1.7M{% else %}€1.7M{% endif %}</span>
        <span class="timeline-stat-label">{% if page.lang == 'fr' %}Financements{% else %}Funding{% endif %}</span>
      </div>
    </div>
  </div>

  <div class="cv-section">
    <h3>{% if page.lang == 'fr' %}📄 Curriculum Vitae{% else %}📄 Curriculum Vitae{% endif %}</h3>
    <div class="cv-links">
      <a href="/CV/CV_ClaireVandiedonck_FR_2025.pdf" class="btn" target="_blank">
        {% if page.lang == 'fr' %}CV Français (PDF){% else %}CV French (PDF){% endif %}
      </a>
      <a href="/CV/CV_ClaireVandiedonck_EN_2025.pdf" class="btn secondary" target="_blank">
        {% if page.lang == 'fr' %}CV English (PDF){% else %}CV English (PDF){% endif %}
      </a>
    </div>
  </div>

  
</section>
