import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Chip,
  Card,
  CardContent,
  Button,
  Fab,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Send,
  Close,
  SmartToy,
  Psychology,
  Star,
  Schedule,
  Info,
  Spa,
  TrendingUp,
  Face,
  AutoAwesome,
  ChatBubble
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'jen';
  timestamp: Date;
  type?: 'text' | 'recommendation' | 'quick-action';
  data?: any;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactElement;
  action: string;
}

const quickActions: QuickAction[] = [
  { id: '1', label: 'Book CoolSculpting', icon: <Schedule />, action: 'book_coolsculpting' },
  { id: '2', label: 'Ulthera Information', icon: <Info />, action: 'ulthera_info' },
  { id: '3', label: 'Treatment Comparison', icon: <TrendingUp />, action: 'compare_treatments' },
  { id: '4', label: 'Skin Analysis', icon: <Face />, action: 'skin_analysis' }
];

const jenResponses = {
  greeting: "Hi! I'm Jen's AI Assistant, trained on her 15+ years of expertise in CoolSculpting and Ulthera treatments. I'm here to help you understand your options and find the perfect treatment plan. What can I help you with today?",
  
  coolsculpting: "CoolSculpting is my specialty! With over 10,000 procedures performed, I've seen incredible transformations. It's FDA-cleared for 9 treatment areas and can reduce fat by 20-25% per session. The best part? No downtime! Most clients see optimal results in 2-3 months. What area are you considering?",
  
  ulthera: "Ulthera is the only FDA-approved non-invasive treatment for lifting skin on the neck, chin, and brow. I'm certified by Merz and have been performing Ulthera since its launch. It uses focused ultrasound to stimulate your body's own collagen production. Results develop over 2-3 months and can last 1-2 years. Are you looking for facial tightening or body contouring?",
  
  consultation: "I'd love to meet with you for a personalized consultation! During our session, I'll assess your concerns, discuss realistic expectations, and create a customized treatment plan. My expertise in both CoolSculpting and Ulthera allows me to recommend the perfect combination for your goals. Would you prefer an in-person or virtual consultation?",
  
  experience: "I've been in aesthetic medicine for over 15 years, specializing in body contouring. I'm one of the top CoolSculpting providers globally and have extensive training with Merz for Ulthera treatments. I believe in natural-looking results and take pride in helping clients feel confident in their own skin. What brings you to explore aesthetic treatments?",
  
  results: "Results vary by individual, but I track all my patients' progress carefully. For CoolSculpting, most clients see 20-25% fat reduction in treated areas. With Ulthera, we typically see significant tightening and lifting. I always provide realistic timelines and expectations during consultation. Would you like to see some before/after examples?",
  
  default: "That's a great question! As someone who's dedicated my career to helping people achieve their aesthetic goals, I'd recommend we discuss this during a consultation where I can give you personalized advice based on your specific needs and goals. Every client is unique, and I believe in creating customized treatment plans. Would you like to schedule a consultation?"
};

const getJenResponse = (userMessage: string): Message => {
  const message = userMessage.toLowerCase();
  
  let response = jenResponses.default;
  let type: 'text' | 'recommendation' = 'text';
  let data = null;
  
  if (message.includes('coolsculpting') || message.includes('cool sculpting') || message.includes('fat reduction')) {
    response = jenResponses.coolsculpting;
    type = 'recommendation';
    data = {
      treatment: 'CoolSculpting',
      benefits: ['FDA-cleared', 'No downtime', '20-25% fat reduction', '9 treatment areas'],
      nextStep: 'Book consultation to assess your target areas'
    };
  } else if (message.includes('ulthera') || message.includes('ultherapy') || message.includes('skin tighten') || message.includes('lifting')) {
    response = jenResponses.ulthera;
    type = 'recommendation';
    data = {
      treatment: 'Ulthera',
      benefits: ['FDA-approved lifting', 'Stimulates collagen', 'Natural results', 'No surgery'],
      nextStep: 'Schedule consultation to determine treatment areas'
    };
  } else if (message.includes('consultation') || message.includes('appointment') || message.includes('meet')) {
    response = jenResponses.consultation;
  } else if (message.includes('experience') || message.includes('qualifications') || message.includes('who are you')) {
    response = jenResponses.experience;
  } else if (message.includes('results') || message.includes('before') || message.includes('after')) {
    response = jenResponses.results;
  } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    response = jenResponses.greeting;
  }
  
  return {
    id: Date.now().toString(),
    text: response,
    sender: 'jen',
    timestamp: new Date(),
    type,
    data
  };
};

const JenAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const greeting: Message = {
        id: '0',
        text: jenResponses.greeting,
        sender: 'jen',
        timestamp: new Date()
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const jenResponse = getJenResponse(inputText);
      setMessages(prev => [...prev, jenResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    let message = '';
    switch (action) {
      case 'book_coolsculpting':
        message = 'I\'d like to book a CoolSculpting consultation';
        break;
      case 'ulthera_info':
        message = 'Tell me more about Ulthera treatments';
        break;
      case 'compare_treatments':
        message = 'Can you help me compare different treatments?';
        break;
      case 'skin_analysis':
        message = 'I\'d like a skin analysis';
        break;
      default:
        return;
    }
    
    setInputText(message);
    handleSendMessage();
  };

  const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
    const isJen = message.sender === 'jen';
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: isJen ? 'flex-start' : 'flex-end',
            mb: 2
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '80%' }}>
            {isJen && (
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  mr: 1,
                  bgcolor: '#D4A574'
                }}
              >
                <SmartToy fontSize="small" />
              </Avatar>
            )}
            <Paper
              elevation={1}
              sx={{
                p: 2,
                bgcolor: isJen ? 'grey.100' : '#D4A574',
                color: isJen ? 'text.primary' : 'white',
                borderRadius: isJen ? '18px 18px 18px 4px' : '18px 18px 4px 18px'
              }}
            >
              <Typography variant="body2">
                {message.text}
              </Typography>
              
              {message.type === 'recommendation' && message.data && (
                <Card sx={{ mt: 2, bgcolor: 'rgba(255,255,255,0.9)' }}>
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <Typography variant="subtitle2" gutterBottom color="text.primary">
                      {message.data.treatment} Benefits:
                    </Typography>
                    <List dense>
                      {message.data.benefits.map((benefit: string, index: number) => (
                        <ListItem key={index} sx={{ py: 0 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <Star sx={{ fontSize: 16, color: '#D4A574' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={benefit} 
                            primaryTypographyProps={{ 
                              variant: 'caption',
                              color: 'text.primary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ 
                        mt: 1,
                        bgcolor: '#D4A574',
                        '&:hover': { bgcolor: '#C19660' }
                      }}
                    >
                      {message.data.nextStep}
                    </Button>
                  </CardContent>
                </Card>
              )}
              
              <Typography variant="caption" display="block" sx={{ mt: 1, opacity: 0.7 }}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Typography>
            </Paper>
          </Box>
        </Box>
      </motion.div>
    );
  };

  return (
    <>
      {/* Chat Fab Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <Fab
          color="primary"
          onClick={() => setIsOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            bgcolor: '#D4A574',
            '&:hover': { bgcolor: '#C19660' },
            zIndex: 1000,
            boxShadow: '0 8px 32px rgba(212, 165, 116, 0.3)'
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChatBubble />
          </motion.div>
        </Fab>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: 'fixed',
              bottom: 100,
              right: 24,
              width: 400,
              height: 600,
              zIndex: 1001
            }}
          >
            <Paper
              elevation={8}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  p: 2,
                  bgcolor: '#D4A574',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#D4A574', mr: 2 }}>
                    <Psychology />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">Jen's AI Assistant</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      Powered by 15+ years of expertise
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={() => setIsOpen(false)}
                  sx={{ color: 'white' }}
                >
                  <Close />
                </IconButton>
              </Box>

              {/* Messages */}
              <Box
                sx={{
                  flex: 1,
                  p: 2,
                  overflowY: 'auto',
                  bgcolor: 'background.default'
                }}
              >
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: '#D4A574' }}>
                        <SmartToy fontSize="small" />
                      </Avatar>
                      <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.100' }}>
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Typography variant="body2">
                            Jen is typing...
                          </Typography>
                        </motion.div>
                      </Paper>
                    </Box>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </Box>

              {/* Quick Actions */}
              {messages.length <= 1 && (
                <Box sx={{ p: 2, bgcolor: 'grey.50' }}>
                  <Typography variant="caption" color="text.secondary" gutterBottom>
                    Quick actions:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                    {quickActions.map((action) => (
                      <Chip
                        key={action.id}
                        label={action.label}
                        icon={action.icon}
                        variant="outlined"
                        size="small"
                        clickable
                        onClick={() => handleQuickAction(action.action)}
                        sx={{
                          '&:hover': {
                            bgcolor: '#D4A574',
                            color: 'white',
                            '& .MuiChip-icon': { color: 'white' }
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              <Divider />

              {/* Input */}
              <Box sx={{ p: 2, bgcolor: 'white' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Ask Jen anything about treatments..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3
                      }
                    }}
                  />
                  <IconButton
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    sx={{
                      bgcolor: '#D4A574',
                      color: 'white',
                      '&:hover': { bgcolor: '#C19660' },
                      '&.Mui-disabled': { bgcolor: 'grey.300' }
                    }}
                  >
                    <Send />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JenAIAssistant;