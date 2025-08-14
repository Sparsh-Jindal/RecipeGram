import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentYear = new Date().getFullYear();

  featuredRecipes = [
    {
      title: 'Golden Pancakes',
      description:
        'Fluffy buttermilk pancakes with fresh berries and maple syrup drizzle.',
      image:
        'https://oaktownspiceshop.com/cdn/shop/articles/Oaktown_Golden_Milk_Pancakes-2.jpg?v=1650659479',
      time: 20,
      category: 'Breakfast',
      icon: 'fas fa-utensils me-1',
    },
    {
      title: 'Mediterranean Salad',
      description:
        'Fresh greens with feta, olives, and homemade lemon vinaigrette.',
      image:
        'https://thedeliciousplate.com/wp-content/uploads/2024/01/Mediterranean-tomato-and-cucumber-salad-11.jpg',
      time: 15,
      category: 'Vegan',
      icon: 'fas fa-leaf me-1',
    },
    {
      title: 'Pasta',
      description: 'Creamy mushroom pasta with black truffle oil and parmesan.',
      image:
        'https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png',
      time: 30,
      category: "Chef's Pick",
      icon: 'fas fa-star me-1',
    },
    {
      title: 'Signature Burger',
      description:
        'Juicy wagyu patty with aged cheddar and caramelized onions.',
      image:
        'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      time: 25,
      category: 'Popular',
      icon: 'fas fa-fire me-1',
    },
  ];

  features = [
    {
      icon: 'fas fa-users',
      title: 'Vibrant Community',
      description:
        'Connect with thousands of food lovers, share tips, and get feedback on your creations.',
    },
    {
      icon: 'fas fa-book-open',
      title: 'Recipe Collections',
      description:
        'Organize your recipes into beautiful collections and share them with the world.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Performance Analytics',
      description:
        'Track how your recipes perform with detailed engagement statistics and insights.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations() {
    // Animation on scroll implementation
    const animateElements = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = entry.target.getAttribute('data-animate');
            entry.target.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animateElements.forEach((element) => {
      observer.observe(element);
    });

    // Add pulse animation to CTA button
    const ctaBtn = document.querySelector('.cta-btn-primary');
    if (ctaBtn) {
      setInterval(() => {
        ctaBtn.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
          ctaBtn.classList.remove('animate__animated', 'animate__pulse');
        }, 1000);
      }, 5000);
    }
  }
}
