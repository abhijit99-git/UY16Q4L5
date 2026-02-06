import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { 
  Container, 
  Header, 
  TodoForm, 
  Input, 
  Button, 
  TodoContainer, 
  LoadingSpinner, 
  Footer 
} from './components/styles/StyledComponents';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState(true);

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/todos`);
      setTodos(response.data);
      setFilteredTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await axios.post(`${API_URL}/api/todos`, {
        text: newTodo.trim()
      });
      setTodos([response.data, ...todos]);
      setNewTodo('');
      applyFiltersAndSearch();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/api/todos/${id}`);
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
      applyFiltersAndSearch();
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
      applyFiltersAndSearch();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Apply filters and search
  const applyFiltersAndSearch = () => {
    let filtered = todos;

    // Apply completion filter
    if (filterStatus === 'active') {
      filtered = filtered.filter(todo => !todo.completed);
    } else if (filterStatus === 'completed') {
      filtered = filtered.filter(todo => todo.completed);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(todo =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTodos(filtered);
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle filter
  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  // Initial fetch
  useEffect(() => {
    fetchTodos();
  }, []);

  // Apply filters and search whenever dependencies change
  useEffect(() => {
    applyFiltersAndSearch();
  }, [todos, searchQuery, filterStatus]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Header>
              <h1>Todo App</h1>
              <p>Organize your tasks with modern MERN stack</p>
            </Header>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TodoForm onSubmit={addTodo}>
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="What needs to be done?"
              />
              <Button 
                type="submit" 
                primary
                disabled={!newTodo.trim()}
              >
                Add Todo
              </Button>
            </TodoForm>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TodoContainer>
              {loading ? (
                <LoadingSpinner>
                  <div className="spinner"></div>
                  <p>Loading todos...</p>
                </LoadingSpinner>
              ) : (
                <TodoList
                  todos={filteredTodos}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              )}
            </TodoContainer>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Footer>
              <p>
                {todos.filter(todo => !todo.completed).length} active •{' '}
                {todos.filter(todo => todo.completed).length} completed •{' '}
                {todos.length} total
              </p>
            </Footer>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}

export default App;
