import { Metadata } from 'next';

// Cette fonction est utilisée pour générer les métadonnées dynamiquement en fonction du slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    // Récupérer l'article depuis l'API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/blog/public/${params.slug}`);
    
    if (!res.ok) {
      // Métadonnées par défaut si l'article n'est pas trouvé
      return {
        title: "Article non trouvé | Fibre Optique Travaux",
        description: "L'article que vous recherchez n'existe pas ou a été déplacé."
      };
    }
    
    const post = await res.json();
    
    // Métadonnées personnalisées pour l'article
    return {
      title: `${post.title} | Fibre Optique Travaux`,
      description: post.excerpt,
      keywords: `fibre optique, ${post.title.toLowerCase()}, blog fibre optique, installation fibre, PACA`
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des métadonnées:', error);
    
    // Métadonnées par défaut en cas d'erreur
    return {
      title: "Blog Fibre Optique | Fibre Optique Travaux",
      description: "Découvrez nos articles sur la fibre optique, les installations et les solutions de déblocage."
    };
  }
}
