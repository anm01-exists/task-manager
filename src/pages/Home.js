import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';

const Home = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'React Basics', content: 'Learn about components, props, and state.' },
    { id: 2, title: 'Routing', content: 'Navigate using React Router.' }
  ]);

  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    const newCard = {
      id: Date.now(),
      title: formData.title,
      content: formData.content
    };

    setCards([newCard, ...cards]);
    setFormData({ title: '', content: '' });
  };

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <Layout>
      <h2>Add New Card</h2>
      <form onSubmit={handleAdd} style={{ marginBottom: '30px' }}>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <input
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Add</button>
      </form>

      {cards.map(card => (
        <div key={card.id} style={{ position: 'relative' }}>
          <Card title={card.title} content={card.content} />
          <button
            onClick={() => handleDelete(card.id)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'red',
              color: '#fff',
              border: 'none',
              padding: '5px 10px',
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </Layout>
  );
};

export default Home;
