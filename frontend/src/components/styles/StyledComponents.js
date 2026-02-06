import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.25rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  animation: fadeIn 0.8s ease-in-out;

  h1 {
    font-size: clamp(2rem, 8vw, 3.5rem);
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const TodoForm = styled.form`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 15px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 15px;
  font-size: 1.1rem;
  background: rgba(248, 249, 250, 0.8);
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #8b92a9;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.875rem 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
    border-radius: 12px;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
    border-radius: 10px;
    width: 100%;
  }

  ${props => props.primary && `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
  `}

  ${props => props.secondary && `
    background: rgba(255, 255, 255, 0.2);
    color: #333;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }
  `}

  ${props => props.filter && `
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 10px;
    background: ${props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255, 255, 255, 0.2)'};
    color: ${props.active ? 'white' : '#333'};
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  `}
`;

export const SearchContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 12px;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  svg {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #8b92a9;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
    
    svg {
      left: 1.25rem;
      width: 18px;
      height: 18px;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    svg {
      left: 1rem;
      width: 16px;
      height: 16px;
    }
  }
`;

export const SearchInput = styled(Input)`
  padding-left: 3rem;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    padding-left: 2.5rem;
  }
  
  @media (max-width: 480px) {
    padding-left: 2.25rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.6rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    justify-content: center;
  }
`;

export const TodoContainer = styled.main`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-height: 400px;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 15px;
    min-height: 300px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
    min-height: 200px;
  }
`;

export const TodoItem = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: slideUp 0.3s ease-out;

  ${props => props.completed && `
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border-left: 4px solid #28a745;
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 0.875rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 0.75rem;
    border-radius: 10px;
  }
`;

export const TodoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TodoLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    width: 100%;
  }
`;

export const Checkbox = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${props => props.checked ? '#28a745' : '#ddd'};
  background: ${props => props.checked ? '#28a745' : 'white'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    border-color: #667eea;
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 22px;
    height: 22px;
  }
  
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }

  svg {
    width: 14px;
    height: 14px;
    color: white;
    
    @media (max-width: 768px) {
      width: 12px;
      height: 12px;
    }
    
    @media (max-width: 480px) {
      width: 10px;
      height: 10px;
    }
  }
`;

export const TodoText = styled.div`
  flex: 1;

  p {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    color: ${props => props.completed ? '#6c757d' : '#333'};
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    margin-bottom: 0.3rem;
    line-height: 1.4;
    word-wrap: break-word;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }

  small {
    color: #8b92a9;
    font-size: 0.85rem;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #dc3545;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(220, 53, 69, 0.1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.375rem;
  }

  svg {
    width: 20px;
    height: 20px;
    
    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
    
    @media (max-width: 480px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #8b92a9;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }

  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 2rem;
    opacity: 0.5;
    
    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
      width: 48px;
      height: 48px;
      margin-bottom: 1rem;
    }
  }

  h3 {
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    margin-bottom: 1rem;
    color: #6c757d;
  }

  p {
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    line-height: 1.6;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(102, 126, 234, 0.1);
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
      border-width: 3px;
    }
    
    @media (max-width: 480px) {
      width: 24px;
      height: 24px;
      border-width: 2px;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;
