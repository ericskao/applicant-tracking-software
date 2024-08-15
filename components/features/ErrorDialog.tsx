'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { AlertDialogFooter, AlertDialogHeader } from '../ui/alert-dialog';

const ErrorDialog = () => {
  const error = '';
  return (
    <AlertDialog open={!!error}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{error}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => {}}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ErrorDialog;
