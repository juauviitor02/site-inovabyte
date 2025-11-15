export const base44 = {
  integrations: {
    Core: {
      SendEmail: async (data) => {
        console.log('Email simulado:', data);
        // Aqui você pode implementar integração real com API de email
        return Promise.resolve({ success: true });
      }
    }
  }
};