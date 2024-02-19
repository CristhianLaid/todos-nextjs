
import prisma from '@/libs/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            {description: 'descripcion de todo', complete: true},
            {description: 'descripcion de todo 1'},
            {description: 'descripcion de todo 2'},
            {description: 'descripcion de todo 3'},
        ]
    })

    return NextResponse.json({
        seed: 'message'
    })
}