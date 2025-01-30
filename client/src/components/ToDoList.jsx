import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TODOS } from '../utils/queries';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../utils/mutations';
import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton, CircularProgress, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList = () => {
  const { loading, data } = useQuery(QUERY_TODOS);
  const [task, setTask] = useState('');

  const [addToDo] = useMutation(ADD_TODO, {
    update(cache, { data: { addToDo } }) {
      const { getToDos } = cache.readQuery({ query: QUERY_TODOS });
      cache.writeQuery({
        query: QUERY_TODOS,
        data: { getToDos: [...getToDos, addToDo] },
      });
    },
  });

  const [toggleToDo] = useMutation(TOGGLE_TODO, {
    update(cache, { data: { toggleToDo } }) {
      const { getToDos } = cache.readQuery({ query: QUERY_TODOS });
      cache.writeQuery({
        query: QUERY_TODOS,
        data: { getToDos: getToDos.map(todo => todo._id === toggleToDo._id ? toggleToDo : todo) },
      });
    },
  });

  const [deleteToDo] = useMutation(DELETE_TODO, {
    update(cache, { data: { deleteToDo } }) {
      const { getToDos } = cache.readQuery({ query: QUERY_TODOS });
      cache.writeQuery({
        query: QUERY_TODOS,
        data: { getToDos: getToDos.filter(todo => todo._id !== deleteToDo._id) },
      });
    },
  });

  const handleAddToDo = async () => {
    if (!task.trim()) return;
    await addToDo({ variables: { task } });
    setTask('');
  };

  const handleToggle = async (_id) => {
    await toggleToDo({ variables: { id: _id } });
  };

  const handleDelete = async (_id) => {
    await deleteToDo({ variables: { id: _id } });
  };

  if (loading) return (
    <Paper elevation={3} sx={{ p: 3, textAlign: 'center', mt: 2 }}>
      <CircularProgress />
    </Paper>
  );

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>To-Do List</Typography>
      
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddToDo} fullWidth>
        Add Task
      </Button>

      <List sx={{ mt: 2 }}>
        {data?.getToDos.map((todo) => (
          <ListItem key={todo._id} secondaryAction={
            <IconButton edge="end" onClick={() => handleDelete(todo._id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <Checkbox checked={todo.completed} onChange={() => handleToggle(todo._id)} />
            <ListItemText primary={todo.task} sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ToDoList;