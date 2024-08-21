'use client';

import { JOB_CONTENT_VIEW_CLASSNAME } from '@/components/features/job/JobDescription';
import JobSubmittedView from '@/components/features/job/JobSubmittedView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validateEmail } from '@/lib/utils';
import clsx from 'clsx';
import { useState } from 'react';

const FORM_ITEM_CLASSNAME = 'flex flex-col gap-y-2';
const FORM_ITEM_ERROR_CLASSNAME = 'text-red-500 text-xs';

const JobApplication = ({ jobId }: { jobId: number }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');
  const [error, setError] = useState<{
    email?: string;
    resume?: string;
    firstName?: string;
    lastName?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid = firstName && lastName && email;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setError({
        email:
          (!email ? 'Email is required' : undefined) || !validateEmail(email)
            ? 'Email is not valid'
            : undefined,
        firstName: !firstName ? 'First name is required' : undefined,
        lastName: !lastName ? 'Last name is required' : undefined,
      });
      return;
    }
    try {
      setSubmitting(true);
      fetch(`/api/jobs/${jobId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          resume,
          jobId,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setResume('');
      setError({});
      setSubmitted(true);
    }
  };

  return (
    <section className={JOB_CONTENT_VIEW_CLASSNAME}>
      {submitted ? (
        <JobSubmittedView setSubmitted={setSubmitted} id={jobId} />
      ) : (
        <form className="gap-y-4 flex flex-col">
          <div className="flex gap-x-4">
            <div className={clsx(FORM_ITEM_CLASSNAME, 'flex-1')}>
              <div className="flex gap-x-2 items-center">
                <Label htmlFor="first-name">First Name</Label>
                {error.firstName && (
                  <p
                    className={FORM_ITEM_ERROR_CLASSNAME}
                    aria-describedby="first-name-error"
                  >
                    {error.firstName}
                  </p>
                )}
              </div>
              <Input
                value={firstName}
                onChange={(e) => {
                  setError({});
                  setFirstName(e.target.value);
                }}
                type="text"
                id="first-name"
                placeholder="First name"
                required
              />
            </div>
            <div className={clsx(FORM_ITEM_CLASSNAME, 'flex-1')}>
              <div className="flex gap-x-2 items-center">
                <Label htmlFor="last-name">Last Name</Label>
                {error.lastName && (
                  <p
                    className={FORM_ITEM_ERROR_CLASSNAME}
                    aria-describedby="last-name-error"
                  >
                    {error.lastName}
                  </p>
                )}
              </div>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setError({});
                  setLastName(e.target.value);
                }}
                id="last-name"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className={FORM_ITEM_CLASSNAME}>
            <div className="flex gap-x-2 items-center">
              <Label htmlFor="email">Email</Label>
              {error.email && (
                <p
                  className={FORM_ITEM_ERROR_CLASSNAME}
                  aria-describedby="email-error"
                >
                  {error.email}
                </p>
              )}
            </div>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setError({});
                setEmail(e.target.value);
              }}
              placeholder="Email"
              required
            />
          </div>
          <div className={FORM_ITEM_CLASSNAME}>
            <Label htmlFor="resume">Resume</Label>
            <Input
              value={resume}
              onChange={(e) => {
                setResume(e.target.value);
              }}
              type="file"
              id="resume"
              className="w-64"
              placeholder="Resume"
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={submitting}
            className="mt-4"
            type="submit"
            variant={submitting ? 'loading' : 'default'}
          >
            {submitting ? 'Processing...' : 'Submit'}
          </Button>
        </form>
      )}
    </section>
  );
};

export default JobApplication;
