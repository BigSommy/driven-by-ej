import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'review',
    title: 'Customer Review',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Customer Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (rule) => rule.required().min(1).max(5),
            description: 'Rating from 1 to 5 stars',
        }),
        defineField({
            name: 'message',
            title: 'Review Message',
            type: 'text',
            validation: (rule) => rule.required().min(10).max(500),
        }),
        defineField({
            name: 'carBought',
            title: 'Car Bought',
            type: 'reference',
            to: [{ type: 'car' }],
            description: 'Optional - which car did they buy?',
        }),
        defineField({
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            initialValue: false,
            description: 'Only approved reviews will show on the website',
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'message',
            rating: 'rating',
            approved: 'approved',
        },
        prepare({ title, subtitle, rating, approved }) {
            return {
                title: `${title} - ${rating}⭐`,
                subtitle: `${approved ? '✅' : '⏳'} ${subtitle?.substring(0, 60)}...`,
            }
        },
    },
})
