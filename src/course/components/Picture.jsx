

function Picture({ index, title, pic, theme = "dark" }) {
  const isDark = theme === "dark";

  const styles = {
    container: {
      width: '100%',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      margin: 'auto',
      backgroundColor: isDark ? '#1b1f23' : '#f5f5f5',
      borderRadius: '10px',
      boxShadow: isDark ? '0 4px 14px rgba(0, 0, 0, 0.4)' : '0 4px 14px rgba(0, 0, 0, 0.1)',
      color: isDark ? '#e5e7eb' : '#111827',
      fontFamily: 'Inter, Poppins, sans-serif',
    },
    imageWrapper: {
      width: '100%',
      height: 'auto',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      maxHeight: '300px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    placeholder: {
      width: '100%',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDark ? '#2b2f35' : '#e0e0e0',
      color: isDark ? '#c2c5c8' : '#444',
      borderRadius: '8px',
      fontSize: '1.1rem',
    },
    title: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#000000',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageWrapper}>
        {pic ? (
          <img
            style={styles.image}
            src={pic}
            alt={`Uploaded ${index + 1}`}
          />
        ) : (
          <div style={styles.placeholder}>Add Image</div>
        )}
      </div>
      <div>
        <h2 style={styles.title}>Picture {index + 1}: {title}</h2>
      </div>
    </div>
  );
}

export default Picture;
