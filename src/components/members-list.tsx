"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";

type Member = {
  name: string;
  company: string;
  description: string;
  imageUrl: string;
  hint: string;
};

export function MembersList({ members }: { members: Member[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="max-w-md mx-auto">
        <Input
          type="text"
          placeholder="Search members by name, company, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.name} className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
            <CardHeader className="items-center text-center">
              <Avatar className="w-24 h-24 mb-4 border">
                <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.hint} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{member.name}</CardTitle>
              <Badge variant="secondary">{member.company}</Badge>
            </CardHeader>
            <CardContent className="text-center flex-grow">
              <p className="text-muted-foreground">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
