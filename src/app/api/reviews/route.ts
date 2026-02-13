import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Create a Sanity client with write permissions
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2024-02-13',
    token: process.env.SANITY_API_WRITE_TOKEN, // Write token stored server-side
    useCdn: false,
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, rating, message, carBought } = body;

        // Validation
        if (!name || !rating || !message) {
            return NextResponse.json(
                { error: 'Name, rating, and message are required' },
                { status: 400 }
            );
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: 'Rating must be between 1 and 5' },
                { status: 400 }
            );
        }

        if (message.length < 10 || message.length > 500) {
            return NextResponse.json(
                { error: 'Message must be between 10 and 500 characters' },
                { status: 400 }
            );
        }

        // Create review document in Sanity
        const review = await client.create({
            _type: 'review',
            name: name.trim(),
            rating: Number(rating),
            message: message.trim(),
            ...(carBought && { carBought: { _type: 'reference', _ref: carBought } }),
            approved: false,
            submittedAt: new Date().toISOString(),
        });

        return NextResponse.json(
            { success: true, message: 'Review submitted successfully! It will appear after approval.' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error submitting review:', error);
        return NextResponse.json(
            { error: 'Failed to submit review. Please try again.' },
            { status: 500 }
        );
    }
}
