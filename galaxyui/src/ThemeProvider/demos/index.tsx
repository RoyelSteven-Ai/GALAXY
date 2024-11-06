import { ThemeProvider } from '@galaxyui';
import { Button } from 'antd';

export default () => {
  return (
    <ThemeProvider>
      <Button type="primary">GALAXY-AI</Button>
    </ThemeProvider>
  );
};
