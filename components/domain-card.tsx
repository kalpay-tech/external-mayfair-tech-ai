"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

interface DomainCardProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  delay: number
  image?: string
}

export function DomainCard({ title, description, features, icon, delay, image }: DomainCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      )}

      <CardHeader className="relative z-10">
        <div
          className={`w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 transition-all duration-300 ${isHovered ? "scale-110 bg-secondary/20" : ""}`}
        >
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold text-balance">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-pretty">{description}</CardDescription>
      </CardHeader>

      <CardContent className="relative z-10">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
