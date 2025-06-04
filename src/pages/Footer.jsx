// Footer.js
import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#222',
      color: '#eee',
      padding: '40px 20px 20px',
      fontFamily: 'sans-serif'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '30px'
    },
    section: {
      flex: '1 1 200px'
    },
    logo: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#fff'
    },
    heading: {
      marginBottom: '10px',
      color: '#fff'
    },
    link: {
      color: '#ccc',
      textDecoration: 'none',
      display: 'block',
      lineHeight: '1.8'
    },
    linkHover: {
      color: '#fff'
    },
    socialIcons: {
      display: 'flex',
      gap: '10px',
      fontSize: '18px'
    },
    icon: {
      color: '#ccc',
      textDecoration: 'none'
    },
    bottom: {
      textAlign: 'center',
      borderTop: '1px solid #444',
      marginTop: '30px',
      paddingTop: '15px',
      fontSize: '14px',
      color: '#aaa'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Brand Section */}
        <div style={styles.section}>
          <h2 style={styles.logo}>MyBlog</h2>
          <p>Sharing ideas, tutorials, and stories.</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <a href="/" style={styles.link}>Home</a>
          <a href="/blogs" style={styles.link}>Blogs</a>
          <a href="/about" style={styles.link}>About Me</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Follow Me</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}><i className="fab fa-facebook-f"></i></a>
            <a href="#" style={styles.icon}><i className="fab fa-twitter"></i></a>
            <a href="#" style={styles.icon}><i className="fab fa-instagram"></i></a>
            <a href="#" style={styles.icon}><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
