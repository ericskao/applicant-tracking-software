const util = require('util');

import { api } from '@/lib/api';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { firstName, lastName, email, resume, jobId } = await request.json();

  try {
    api('/candidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'On-Behalf-Of': '4412466007',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email_addresses: [
          {
            value: email,
            type: 'personal',
          },
        ],
        applications: [
          {
            job_id: jobId,
            // attachments: [resume],
          },
        ],
      }),
    });
    // create application
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error', error }, { status: 400 });
  }

  return NextResponse.json({ message: 'Application submitted successfully' });
}
