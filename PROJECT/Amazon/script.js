// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    // Search functionality
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            alert(`Searching for: "${searchTerm}"`);
            // In a real app, you would redirect to search results page
            // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        } else {
            alert('Please enter a search term');
            searchInput.focus();
        }
    }
    
    // Product click functionality
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('click', function() {
            const productName = this.querySelector('p').textContent;
            const productPrice = this.querySelector('.price')?.textContent || 
                               this.querySelector('.price-deal')?.textContent || 
                               'Price not available';
            const category = this.getAttribute('data-category');
            
            // Show product details
            const productDetails = `
                Product: ${productName}
                Price: ${productPrice}
                Category: ${category || 'General'}
                
                Would you like to add this to cart?
            `;
            
            if (confirm(productDetails)) {
                addToCart();
            }
        });
    });
    
    // Add to cart function
    function addToCart() {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Animate cart icon
        const cartIcon = document.querySelector('.nav-cart i');
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 300);
        
        // Show notification
        showNotification('Item added to cart!');
    }
    
    // Notification system
    function showNotification(message) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        // Add styles for notification
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #232f3e;
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-width: 300px;
                z-index: 10000;
                animation: slideIn 0.3s ease;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                margin-left: 10px;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        // Add close functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
            style.remove();
        });
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
                style.remove();
            }
        }, 3000);
    }
    
    // See more functionality
    const seeMoreButtons = document.querySelectorAll('.see-more');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const category = this.closest('.box').querySelector('h2').textContent;
            alert(`Showing more items in "${category}" category`);
        });
    });
    
    // Back to top functionality
    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Footer links functionality
    const footerLinks = document.querySelectorAll('.footer-column li');
    footerLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.textContent;
            alert(`Navigating to: ${linkText}\n\nThis would redirect to the ${linkText} page in a real application.`);
        });
    });
    
    // Navigation items functionality
    const navItems = document.querySelectorAll('.nav-item:not(.nav-cart)');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemText = this.querySelector('.nav-text-bold').textContent;
            alert(`Opening ${itemText} section`);
        });
    });
    
    // Cart click functionality
    const cartButton = document.querySelector('.nav-cart');
    cartButton.addEventListener('click', function(e) {
        e.stopPropagation();
        if (cartCount === 0) {
            alert('Your cart is empty. Add some items to your cart!');
        } else {
            alert(`You have ${cartCount} item${cartCount > 1 ? 's' : ''} in your cart.`);
        }
    });
    
    // Logo click functionality
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        alert('Welcome to Amazon Clone Homepage!');
    });
    
    // Address click functionality
    const address = document.querySelector('.nav-address');
    if (address) {
        address.addEventListener('click', () => {
            alert('Select your delivery location');
        });
    }
    
    // Sub-nav items functionality
    const subNavItems = document.querySelectorAll('.sub-nav-item');
    subNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemText = this.textContent;
            alert(`Opening ${itemText} section`);
        });
    });
    
    // Search select change functionality
    const searchSelect = document.querySelector('.search-select');
    searchSelect.addEventListener('change', function() {
        console.log(`Search category changed to: ${this.value}`);
    });
    
    // Add hover effects for boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl + F to focus search
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
        
        // Escape to clear search
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
        }
    });
    
    // Initialize with some sample products in cart for demo
    setTimeout(() => {
        if (Math.random() > 0.5) {
            cartCount = 3;
            cartCountElement.textContent = cartCount;
        }
    }, 1000);
    
    // Add loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
    
    // Set initial body opacity for fade-in effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});