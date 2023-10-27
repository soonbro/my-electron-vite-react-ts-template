import { Button } from '@renderer/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@renderer/components/ui/card'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@renderer/components/ui/select'
import { Textarea } from '@renderer/components/ui/textarea'

export function DemoReportAnIssue() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>이슈 등록</CardTitle>
        <CardDescription>Report any issues</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2" id="구분">
            <Label htmlFor="Category">구분</Label>
            <Select defaultValue="">
              <SelectTrigger id="Category">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ERP">ERP</SelectItem>
                <SelectItem value="SAP">SAP</SelectItem>
                <SelectItem value="account">계정/권한</SelectItem>
                <SelectItem value="project">프로젝트</SelectItem>
                <SelectItem value="work">작업</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="process-step">처리단계</Label>
            <Select defaultValue="2">
              <SelectTrigger id="process-step" className="line-clamp-1 w-[180px] truncate">
                <SelectValue placeholder="단계 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">요청접수</SelectItem>
                <SelectItem value="2">개발</SelectItem>
                <SelectItem value="3">테스트</SelectItem>
                <SelectItem value="4">완료</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2 ">
            <Label htmlFor="manager">담당자</Label>
            <Input id="manager" placeholder="이름" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="grid gap-2 w-[80px]">
              <Label htmlFor="계획">계획(M/D)</Label>
              <Input id="계획" placeholder="예상공수" />
            </div>
            <div className="grid gap-2 w-[80px]">
              <Label htmlFor="실적">실적(M/D)</Label>
              <Input id="실적" placeholder="실적공수" />
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="subject">제목</Label>
          <Input id="subject" placeholder="이슈 제목" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">상세</Label>
          <Textarea id="description" placeholder="해당 이슈의 상세 내용을 적어주세요" />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button>등록</Button>
        <Button variant="ghost">취소</Button>
      </CardFooter>
    </Card>
  )
}
