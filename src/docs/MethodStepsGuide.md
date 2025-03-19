# Guide d'utilisation du composant MethodSteps

Ce guide explique comment utiliser le composant `MethodSteps` pour améliorer la présentation des étapes ou méthodes dans vos articles de blog.

## Intégration dans un article de blog

### Option 1: Utilisation directe du composant dans l'éditeur

Si votre éditeur de blog permet d'insérer des composants React, vous pouvez utiliser directement le composant `DetectionMethodSteps` :

```jsx
<DetectionMethodSteps />
```

### Option 2: Utilisation dans le contenu HTML

Pour intégrer ce composant dans le contenu HTML de vos articles, vous pouvez ajouter une balise spéciale que vous pourrez détecter et remplacer lors du rendu :

```html
<div data-component="method-steps" data-type="detection"></div>
```

Puis, dans votre composant de rendu d'article, vous pouvez modifier la fonction de rendu pour détecter cette balise et insérer le composant approprié.

### Option 3: Création d'un shortcode personnalisé

Si vous utilisez un CMS comme WordPress, vous pouvez créer un shortcode personnalisé :

```
[method_steps type="detection"]
```

## Personnalisation des étapes

Pour créer vos propres étapes, vous pouvez utiliser le composant générique `MethodSteps` avec des données personnalisées :

```jsx
import MethodSteps from '@/components/MethodSteps';

const customSteps = [
  {
    number: 1,
    title: "Titre de l'étape 1",
    description: "Description détaillée de l'étape 1..."
  },
  {
    number: 2,
    title: "Titre de l'étape 2",
    description: "Description détaillée de l'étape 2...",
    details: [
      {
        letter: "a",
        title: "Sous-étape A",
        content: "Description de la sous-étape A..."
      },
      {
        letter: "b",
        title: "Sous-étape B",
        content: "Description de la sous-étape B..."
      }
    ]
  },
  // Ajoutez autant d'étapes que nécessaire
];

// Puis utilisez le composant avec vos données personnalisées
<MethodSteps steps={customSteps} />
```

## Exemple complet

Voici un exemple complet d'utilisation du composant dans un article de blog :

```jsx
import React from 'react';
import MethodSteps from '@/components/MethodSteps';

const BlogArticle = () => {
  const detecteurSteps = [
    {
      number: 1,
      title: "Consulter les plans du réseau",
      description: "Avant toute recherche physique, il est recommandé de se procurer les plans des infrastructures souterraines..."
    },
    // Autres étapes...
  ];

  return (
    <article>
      <h1>Comment localiser des gaines télécom enterrées</h1>
      
      <p>Introduction de l'article...</p>
      
      <MethodSteps steps={detecteurSteps} />
      
      <p>Conclusion de l'article...</p>
    </article>
  );
};

export default BlogArticle;
```

## Avantages de l'utilisation du composant MethodSteps

1. **Présentation visuelle améliorée** - Les étapes sont clairement identifiées avec des numéros et une mise en forme cohérente
2. **Meilleure lisibilité** - La structure hiérarchique facilite la compréhension des étapes et sous-étapes
3. **Cohérence visuelle** - Toutes vos méthodes par étapes auront la même apparence sur l'ensemble du site
4. **Responsive** - Le design s'adapte parfaitement aux différentes tailles d'écran
5. **SEO-friendly** - La structure sémantique améliore la compréhension du contenu par les moteurs de recherche
