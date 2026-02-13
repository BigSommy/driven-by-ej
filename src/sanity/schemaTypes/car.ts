import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'car',
    title: 'Car',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'brand',
            title: 'Brand',
            type: 'string',
        }),
        defineField({
            name: 'model',
            title: 'Model',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
        }),
        defineField({
            name: 'price',
            title: 'Price (NGN)',
            type: 'number',
            validation: (rule) => rule.required().min(0),
        }),
        defineField({
            name: 'condition',
            title: 'Condition',
            type: 'string',
            options: {
                list: [
                    { title: 'Foreign Used', value: 'foreign' },
                    { title: 'Nigerian Used', value: 'nigerian' },
                    { title: 'Brand New', value: 'new' },
                ],
            },
            initialValue: 'foreign',
        }),
        defineField({
            name: 'mileage',
            title: 'Mileage (km)',
            type: 'number',
        }),
        defineField({
            name: 'engine',
            title: 'Engine Type',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'images',
            title: 'Gallery Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'features',
            title: 'Key Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured on Homepage',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Available', value: 'available' },
                    { title: 'Sold', value: 'sold' },
                    { title: 'Reserved', value: 'reserved' },
                ],
            },
            initialValue: 'available',
        }),
        defineField({
            name: 'isCarOfTheWeek',
            title: 'Car of the Week',
            type: 'boolean',
            initialValue: false,
            description: 'Feature this car as the Car of the Week on homepage',
        }),
        defineField({
            name: 'dealTag',
            title: 'Deal Tag',
            type: 'string',
            options: {
                list: [
                    { title: 'Hot Deal', value: 'hot-deal' },
                    { title: 'Limited Offer', value: 'limited-offer' },
                    { title: 'Best Price', value: 'best-price' },
                    { title: 'Clearance Sale', value: 'clearance' },
                ],
            },
            description: 'Optional tag to highlight special deals',
            hidden: ({ document }) => !document?.isCarOfTheWeek,
        }),
        defineField({
            name: 'dealEndsAt',
            title: 'Deal Ends At',
            type: 'datetime',
            description: 'Optional expiry date for the deal',
            hidden: ({ document }) => !document?.isCarOfTheWeek,
        }),
    ],
})
