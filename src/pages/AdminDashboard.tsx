import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Masjid Admin Dashboard (Conceptual)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Masjid Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Masjid Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="masjidName">Masjid Name</Label>
              <Input id="masjidName" placeholder="e.g., Al-Noor Mosque" />
            </div>
            <div>
              <Label htmlFor="masjidAddress">Address</Label>
              <Input id="masjidAddress" placeholder="e.g., 123 Main St, City" />
            </div>
            <div>
              <Label htmlFor="timezone">GMT Timezone</Label>
              <Select>
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gmt0">GMT+0</SelectItem>
                  <SelectItem value="gmt1">GMT+1</SelectItem>
                  <SelectItem value="gmt-5">GMT-5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Save Settings</Button>
          </CardContent>
        </Card>

        {/* Prayer Times Management */}
        <Card>
          <CardHeader>
            <CardTitle>Prayer Times</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Manage Waqt and Iqamah times here.</p>
            {/* This would be a more complex form/table in a real app */}
            <Button className="w-full">Edit Prayer Times</Button>
          </CardContent>
        </Card>

        {/* Slide Management */}
        <Card>
          <CardHeader>
            <CardTitle>Slides (Ads & Announcements)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Upload images, text, or videos for rotation.</p>
            <Button className="w-full">Manage Slides</Button>
            <div>
              <Label htmlFor="rotationInterval">Rotation Interval (seconds)</Label>
              <Input id="rotationInterval" type="number" defaultValue={10} />
            </div>
            <Button className="w-full">Save Slide Settings</Button>
          </CardContent>
        </Card>

        {/* Layout Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Display Layout</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select>
              <SelectTrigger id="layoutType">
                <SelectValue placeholder="Select display layout" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="layout1">Layout 1 (Split Half Screen)</SelectItem>
                <SelectItem value="layout2">Layout 2 (Bottom Prayer Bar)</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">Apply Layout</Button>
          </CardContent>
        </Card>

        {/* Ad Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Ad Requests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Review and respond to advertiser ad submissions.</p>
            <Button className="w-full">View Ad Requests</Button>
          </CardContent>
        </Card>

        {/* Super Admin Features (Conceptual) */}
        <Card>
          <CardHeader>
            <CardTitle>Super Admin (Conceptual)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Full control over users, accounts, logs, and analytics.
              This section would typically be separate or have elevated permissions.
            </p>
            <Button className="w-full" variant="secondary">Manage Users</Button>
            <Button className="w-full" variant="secondary">View Analytics</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;